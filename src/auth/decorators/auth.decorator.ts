import { UseGuards, applyDecorators } from '@nestjs/common';
import { ValidRoles } from '../interfaces';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../guards/user-role/user-role.guard';
import { RoleProtected } from './role-protected.decorator';

export function Auth(...roles: ValidRoles[]) {
  const theRoles = [];
  if (roles.length !== 0) {
    theRoles.push(ValidRoles.user);
  }
  return applyDecorators(
    RoleProtected(...theRoles),
    UseGuards(AuthGuard(), UserRoleGuard),
  );
}
