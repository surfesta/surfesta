import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
export default function EventDate({ startDateRef, endDateRef }) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());

  function handleStartDate(date) {
    setStartDate(date);
  }
  function handleStartTime(date) {
    setStartTime(date);
  }
  function handleEndDate(date) {
    setEndDate(date);
  }
  function handleEndTime(date) {
    setEndTime(date);
  }

  return (
    <>
      <h2 className="eventform-title">이벤트 날짜 및 시간</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>이벤트가 진행되는 날짜와 시간을 입력해주세요.</p>
        </div>
        <div className="input-box">
          <div className="time-check" ref={startDateRef}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="행사 시작일"
                value={startDate}
                onChange={handleStartDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="행사 시작 시간"
                value={startTime}
                onChange={handleStartTime}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="time-check" ref={endDateRef}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="행사 종료일"
                value={endDate}
                onChange={handleEndDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="행사 종료 시간"
                value={endTime}
                onChange={handleEndTime}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
      </div>
    </>
  );
}
