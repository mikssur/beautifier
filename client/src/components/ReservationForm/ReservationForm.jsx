import React from 'react';

function ReservationForm(props) {

  function newDatee(event) {
    event.preventDefault()
    console.log(event.target.Date.value);
    console.log(event.target.time.value);

  }

  return (
    <form onSubmit={newDatee}>
      <span>Выберите день: </span>
      <input name='Date' type="date" />
      <br />
      <span>Свободное время: </span>
      <select name="time">
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
      </select>
      <br />
      <input type="submit" />
    </form>
  );
}

export default ReservationForm;
