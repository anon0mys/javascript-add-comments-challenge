$(document).ready(function(){
  $('#new_comment_button').click(function() {
    comment_form();
  })
});

const comment_form = () => {
  $('#new_comment_button').replaceWith(`
    <form id="new_comment">
      <textarea name="comment_body" placeholder="Your comment here..." cols="40" rows="5"></textarea>
      <input type='text' id='authorName' placeholder="author">
      <input type='submit' value='Create Comment'>
    </form>
    `)
  $('#new_comment').toggle()
  $('#new_comment').submit(function(event) {
    event.preventDefault()
    add_comment();
  })
}

const add_comment = () => {
  let body = $('#new_comment textarea').val()
  let author = $('#authorName').val()
  $('#comment_list').append(`
    <li>
      ${body}
      <span class="author">${author}</span>
    </li>
    `)
  $('#new_comment').replaceWith('<button id="new_comment_button">New Comment</button>')
  $('#new_comment_button').click(function() {
    comment_form();
  })
}
