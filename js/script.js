console.log('principi.js loaded');

const { createApp } = Vue

createApp({
    data() {
        return {
            tasks:[
                {
                    taskText:'Email team for updates',
                    done: true
                },
                {
                    taskText:'Verify project budget',
                    done: false
                },
                {
                    taskText:'Send out Meeting request',
                    done: false 
                },
                {
                    taskText:'Prepare a deck for next meeting',
                    done: false
                },
                {
                    taskText:'Update project plan',
                    done: false
                }
            ],
            newTaskText: '',
        }
    },
    methods: {
        dataOdierna() {
            const current = new Date();
            const date = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;
            return date;
        },
        changeTaskStatus(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        deleteTask(index){
            this.tasks.splice(index, 1)
        },
        addNewTask(){
            let newTask ={
                taskText: this.newTaskText,
                done: false
            }
            if(this.newTaskText === ''){
            } else{
                this.tasks.push(newTask)
                this.newTaskText= '';
            }
        }
    }
}).mount('#app')


