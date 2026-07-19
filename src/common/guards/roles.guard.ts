import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    // Se debe obtener el nombre del rol según user.rol_id
    // Aquí se asume que se tiene un método para mapear rol_id a nombre
    const userRole = this.getRoleName(user.rolId);
    return requiredRoles.includes(userRole);
  }

  private getRoleName(rolId: number): string {
    // Mapeo simple (idealmente consultar a BD o tener cache)
    const rolesMap = { 1: 'Administrador', 2: 'Director', 3: 'Docente', 4: 'Padre', 5: 'Alumno', 6: 'Auxiliar' };
    return rolesMap[rolId] || '';
  }
}
