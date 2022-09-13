const app = {
    data() {
        return {
            counter: 0,
            title: 'Счетчик',
            title2: 'Список заметок',
            plaseholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['1', '2', '3']
        }

    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNote(idx) {
            this.notes.splice(idx,1)
        }
    },
}

Vue.createApp(app).mount('#app');

