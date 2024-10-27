import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetTaskService } from './get-task.service';
import { Task } from '../Models/task.model';

describe('TaskService', () => {
  let service: GetTaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetTaskService]
    });

    service = TestBed.inject(GetTaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should fetch an array of Task objects', () => {
    const mockTasks: Task[] = [
      new Task(1, 'Task 1', 'Description 1', 'User 1', false),
      new Task(2, 'Task 2', 'Description 2', 'User 2', true),
      new Task(3, 'Task 3', 'Description 3', 'User 3', false)
    ];

    // Llamada al método getTasks
    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(3);
      expect(tasks).toEqual(mockTasks);
    });

    // Simula una respuesta HTTP
    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks); // Simula una respuesta exitosa con mockTasks
  });

  it('should handle an empty array response', () => {
    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(0);
      expect(tasks).toEqual([]);
    });

    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('GET');
    req.flush([]); // Simula una respuesta exitosa con un array vacío
  });
});