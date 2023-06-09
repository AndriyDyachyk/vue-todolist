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
        }
    }
}).mount('#app')


