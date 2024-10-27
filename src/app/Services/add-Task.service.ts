import { Injectable } from '@angular/core';
import { Task } from '../Models/task.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UpdateLocalStorageService } from './update-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {
// Tasks created for me
/*   tasks: Task[] = [
//     new Task(1, 'Check emails', 'Review and respond to pending emails', 'user1', false),
//     new Task(2, 'Plan weekly meeting', 'Prepare the agenda and send invitations for the team meeting', 'user2', false),
//     new Task(3, 'Develop authentication module', 'Implement authentication functionality in the system', 'user3', true),
//     new Task(4, 'Update project documentation', 'Add sections on new features to the documentation', 'user1', false),
//     new Task(5, 'Review pull requests', 'Analyze and approve pending pull requests in the repository', 'user2', true),
//     new Task(6, 'Prepare quarterly presentation', 'Create a presentation with quarterly results for the board', 'user3', false),
//     new Task(7, 'Organize project files', 'Sort and categorize project files into folders', 'user1', true),
//     new Task(8, 'Set up development environment', 'Install dependencies and configure the environment on a new machine', 'user2', false),
//     new Task(9, 'Create test cases', 'Design and document test cases for the inventory module', 'user3', false),
//     new Task(10, 'Backup database', 'Make a backup of the database', 'user1', true),
//     new Task(11, 'Schedule code review', 'Plan a code review session with the development team', 'user2', false),
//     new Task(12, 'Research new technologies', 'Investigate new tools and technologies for upcoming projects', 'user3', false),
//     new Task(13, 'Conduct user feedback survey', 'Gather user feedback for product improvements', 'user1', true),
//     new Task(14, 'Update website content', 'Revise outdated content on the company website', 'user2', false),
//     new Task(15, 'Optimize database queries', 'Improve performance of key database queries', 'user3', false),
//     new Task(16, 'Finalize marketing plan', 'Prepare the quarterly marketing plan for review', 'user1', true),
//     new Task(17, 'Fix bug in checkout process', 'Resolve an issue in the checkout flow on the website', 'user2', true),
//     new Task(18, 'Redesign UI components', 'Create mockups for new user interface components', 'user3', false),
//     new Task(19, 'Analyze customer data', 'Examine data to identify user behavior trends', 'user1', false),
//     new Task(20, 'Write blog post', 'Draft a blog post on industry trends', 'user2', true),
//     new Task(21, 'Host client training', 'Conduct a training session for new clients', 'user3', false),
//     new Task(22, 'Test mobile responsiveness', 'Ensure the website is responsive on mobile devices', 'user1', true),
//     new Task(23, 'Prepare onboarding guide', 'Create a guide for new employees', 'user2', false),
//     new Task(24, 'Implement caching solution', 'Add caching for faster load times', 'user3', false),
//     new Task(25, 'Audit website security', 'Check for vulnerabilities on the site', 'user1', true),
//     new Task(26, 'Run competitive analysis', 'Analyze competitors’ strengths and weaknesses', 'user2', false),
//     new Task(27, 'Develop social media calendar', 'Plan posts for the next month', 'user3', true),
//     new Task(28, 'Prepare for product launch', 'Coordinate details for the upcoming product launch', 'user1', false),
//     new Task(29, 'Create customer support scripts', 'Draft response scripts for common inquiries', 'user2', true),
//     new Task(30, 'Review server logs', 'Analyze server logs to detect errors', 'user3', false),
//     new Task(31, 'Generate sales report', 'Create a report with last month’s sales data', 'user1', true),
//     new Task(32, 'Update API documentation', 'Add new API endpoints to the documentation', 'user2', false),
//     new Task(33, 'Research competitors\' products', 'Compare features and pricing of competitor products', 'user3', true),
//     new Task(34, 'Improve email templates', 'Enhance design and content of email templates', 'user1', false),
//     new Task(35, 'Update server configuration', 'Adjust server settings for optimal performance', 'user2', false),
//     new Task(36, 'Organize team-building event', 'Plan and organize a team-building activity', 'user3', true),
//     new Task(37, 'Review legal contracts', 'Review and approve contract terms with clients', 'user1', false),
//     new Task(38, 'Create monthly newsletter', 'Draft and design the upcoming newsletter', 'user2', true),
//     new Task(39, 'Optimize SEO', 'Improve search engine optimization for key pages', 'user3', false),
//     new Task(40, 'Analyze marketing campaign', 'Evaluate the performance of the latest campaign', 'user1', true),
//     new Task(41, 'Research industry regulations', 'Stay up-to-date on compliance regulations', 'user2', false),
//     new Task(42, 'Build automated tests', 'Add automated tests for critical code sections', 'user3', false),
//     new Task(43, 'Improve customer dashboard', 'Enhance the user interface of the customer dashboard', 'user1', true),
//     new Task(44, 'Create financial forecast', 'Prepare a budget and forecast for the next quarter', 'user2', false),
//     new Task(45, 'Update CRM records', 'Ensure all client information is up-to-date', 'user3', true),
//     new Task(46, 'Conduct internal audit', 'Perform an internal audit of current processes', 'user1', false),
//     new Task(47, 'Manage inventory', 'Track and order new stock for the warehouse', 'user2', true),
//     new Task(48, 'Prepare product demo', 'Create a demonstration for potential clients', 'user3', false),
//     new Task(49, 'Organize client appreciation event', 'Plan an event to thank loyal clients', 'user1', true),
//     new Task(50, 'Update employee handbook', 'Revise policies and add new guidelines', 'user2', false),
 ];**/
  constructor(private updateLocalStorageService: UpdateLocalStorageService, private router: Router) { }
  
  addTask(task: Task): void {
    let storageTasks: any = localStorage.getItem('tasksList');
    let tasks: Task[] = JSON.parse(storageTasks);
    
    let id: number = tasks[tasks.length - 1].id ?? 0;
    task.id = +id + 1;
    task.user = `user${task.id}`;

    tasks.push(task);

    this.updateLocalStorageService.updateLocalStorage(tasks);
    
    this.router.navigate(['/']);
  }
}
