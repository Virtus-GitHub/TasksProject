export class Task{
    constructor(
        public id: number | null = null,
        public name: string,
        public description: string,
        public user: string,
        public completed: boolean
    ){}
}