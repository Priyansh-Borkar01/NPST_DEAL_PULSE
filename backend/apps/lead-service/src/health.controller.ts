import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      service: 'lead-service',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
