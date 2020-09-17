let list = []
const heading = $('<h1>').text('My To Do List')
$('body').prepend(heading)


$('form').on('submit', (event) => {
    event.preventDefault()
    render()
    $(event.currentTarget).trigger('reset')
    
})

const render = () => {
    let $userInput = $('#input-box').val()
    let $li = $('<li>')
    $li.text($userInput)
    $li.addClass('list-item')
    $('ul').append($li)
    list.push($userInput)

    $('.list-item').on('click', (event) => {
            let strike = $(event.target).attr('id', 'strike')
            strike.css('text-decoration-line', 'line-through')
            return strike
        })
}

// could also use this event listener
// $('ul').on('click', 'li', function () {
//     $(this).css({'text-decoration': 'line-through'})
// })

$('#reset').on('click', () =>{
    $('ul').empty()
})
