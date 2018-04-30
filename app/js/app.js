let answer = '';
const answerPane = $('#answerPane');
let finished = false;
$(() => {
    $('.keyboard button[data-action]').on('click', e => {
        if (finished || answer.length > 5) {
            return;
        }
        const btn = $(e.currentTarget);
        const action = '' + btn.data('action');
        switch (action) {
            case 'c':
                answer = '';
                break;
            default:
                answer += action;
        }
        answerPane.text(answer);
    })
});
const nextInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};