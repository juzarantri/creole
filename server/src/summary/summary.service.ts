import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Style,
  StyleForParagraph,
  TextRun,
} from 'docx';
import { Stream } from 'stream';
import * as mammoth from 'mammoth';
import { ConfigService } from '@nestjs/config';
import createReport from 'docx-templates';
const { Configuration, OpenAIApi } = require('openai');

@Injectable()
export class SummaryService {
  constructor(private readonly configService: ConfigService) {}

  async create(body) {
    let response = [];
    /// set the directory path to read the words files
    const directoryPath = path.join(__dirname, '../../', 'uploads');
    /// openai configuration
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const myPromise = new Promise((resolve, reject) => {
      /// reading the directory
      fs.readdir(directoryPath, async (err, files) => {
        if (err) {
          console.log('Unable to scan directory: ' + err);
          reject(err); // reject the promise if there's an error
        }
        /// process the files
        const promises = files.map(async (file) => {
          /// file path
          const path = `${directoryPath}/${file}`;
          /// read the file contents
          const result = await mammoth.extractRawText({
            path: path,
          });
          const content = result.value;
          const augmented_prompt = 'summarize this text: ' + content;

          const completion = await openai.createCompletion({
            model: body.model,
            prompt: augmented_prompt,
            temperature: parseFloat(body.temperature),
            max_tokens: 1000,
          });

          /// store the summary in word file
          // console.log(resultHtml);
          // const doc = new Document({
          //   /// creating new doc content to add in word file
          //   sections: [
          //     {
          //       children: [
          //         new Paragraph({
          //           text: resultHtml.value,
          //         }),
          //         new Paragraph({
          //           alignment: AlignmentType.CENTER,
          //           children: [
          //             new TextRun({
          //               text: 'Summary',
          //               font: 'calibri',
          //               bold: true,
          //               allCaps: true,
          //               color: '#ff0000',
          //             }),
          //           ],
          //         }),
          //         new Paragraph({
          //           children: [
          //             new TextRun({
          //               text: completion.data.choices[0].text,
          //               font: 'Calibri',
          //             }),
          //           ],
          //         }),
          //       ],
          //     },
          //   ],
          // });

          /// Binding the content to word file
          // Packer.toBuffer(doc).then((buffer) => {
          const fileDetails = file.split('.');
          fs.writeFile(
            `${directoryPath}/${fileDetails[0]}-summary.${fileDetails[1]}`,
            `<center><b>Summary</b></center>${completion.data.choices[0].text}`,
            (err) => {
              if (err) throw err;
              console.log('Summary added scuccessfully....');
            },
          );

          // fs.appendFile(path, buffer, (err) => {
          //   if (err) throw err;
          //   console.log('Summary added successfully....');
          // });
          // });

          return {
            filename: file,
            summary: completion.data.choices[0].text,
          };
        });

        try {
          response = await Promise.all(promises);
          resolve(response); // resolve the promise with the response array
        } catch (error) {
          reject(error); // reject the promise if there's an error in the Promise.all() block
        }
      });
    });

    return myPromise
      .then((val) => {
        return val;
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }

  findAll() {
    return `This action returns all summary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} summary`;
  }

  update(id: number, updateSummaryDto: UpdateSummaryDto) {
    return `This action updates a #${id} summary`;
  }

  remove(id: number) {
    return `This action removes a #${id} summary`;
  }
}
