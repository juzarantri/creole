import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/common/helper/constants';

@Injectable()
export class RolesGuards implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    /// fetch the roles of this handler
    const requireRoles = this.reflector.get<Role[]>(
      'roles',
      context.getHandler(),
    );

    //// If no role defined return true by default
    if (!requireRoles) {
      return true;
    }

    /// get the user role
    const { role, ...request } = context.switchToHttp().getRequest().query;

    /// return true if the user has been authorized
    return requireRoles.some((userRole) => role == userRole);
  }
}
