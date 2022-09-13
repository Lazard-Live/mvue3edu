const app = {
    data() {
        return {
            counter: 0,
            title: 'Счетчик',
            title2: 'Список заметок',
            plaseholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['колоблок', 'лол', 'топка']
        }

    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx,1)
        }
    },
}

Vue.createApp(app).mount('#app');

