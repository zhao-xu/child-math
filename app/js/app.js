let answer = '';
const answerPane = $('#answerPane');
let finished = false;
$(() => {
    $('.keyboard button[data-action], .keyboard .key[data-action]').on('click', e => {
        if (finished) {
            return;
        }
        const btn = $(e.currentTarget);
        const action = '' + btn.data('action');
        switch (action) {
            case 'c':
            case 'cancel':
                answer = '';
                break;
            case 'ok':
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