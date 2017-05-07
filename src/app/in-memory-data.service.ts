import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let courses = [
  { "id": 1, "name": "Названия курса", "detail": "Информация о курсе" },
  { "id": 2, "name": "Названия курса", "detail": "Информация о курсе"  },
  { "id": 3, "name": "Названия курса", "detail": "Информация о курсе"  },
  { "id": 4, "name": "Названия курса", "detail": "Информация о курсе"  },
  { "id": 5, "name": "Названия курса", "detail": "Информация о курсе"  },
  
    ];
     let groups = [
  { "id": 1, "number": "Номер группы", "info": "Информация о группе" },
  { "id": 2, "number": "Номер группы", "info": "Информация о группе" },
  { "id": 3, "number": "Номер группы", "info": "Информация о группе" },
  { "id": 4, "number": "Номер группы", "info": "Информация о группе" },
  { "id": 5, "number": "Номер группы", "info": "Информация о группе" },
  
    ];
    return {courses, groups};
    
  }
}
