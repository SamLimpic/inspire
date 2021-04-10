class ClocksService {
    setTime() {
        let clock = document.getElementById('clock')

        setInterval(function () {
            clock.innerHTML = getCurrentTime()
        }, 1)

        function getCurrentTime() {
            let time = ''
            let welcome = ''
            let currentDate = new Date()
            let hours = currentDate.getHours()
            hours === 0 ? hours = 12 : hours = hours
            let minutes = `${currentDate.getMinutes()}`
            if (currentDate.getMinutes() < 10) {
                minutes = '0' + minutes
            }
            if (hours < 6) {
                welcome = "Did you wake up early or just go to bed late?"
                time = 'AM'
            } else if (hours < 12) {
                welcome = "Wow!  You're up early, aren't you?"
                time = 'AM'
            } else if (hours == 12) {
                welcome = "Awake by noon!  What a novel idea!"
                time = 'PM'
            }
            else if (hours <= 18) {
                welcome = "You skipped breakfast today, didn't you?"
                time = 'PM'
                hours -= 12
            } else if (hours < 24) {
                welcome = "You've at least eaten something today, right?"
                time = 'PM'
                hours -= 12
            } else if (hours == 24) {
                welcome = "Awake at midnight... how surprising..."
                time = "AM"
                hours -= 12
            }
            document.getElementById('welcome').innerText = welcome
            let currentTime = hours + ':' + minutes + ` ${time}`
            return currentTime
        }
    }

}

export const clocksService = new ClocksService()

