@ApiTags('Cursos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('courses')
export class CoursesController {
  // GET /grades, POST /grades, GET /sections, POST /assignments, etc.
}
