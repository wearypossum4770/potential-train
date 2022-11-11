// https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers
import { ref, reactive, onMounted, onUnmounted } from "vue";
const calendarHelper = ({ target: { valueAsDate, valueAsNumber } }) => {
  return { valueAsDate, valueAsNumber };
};
const parseDate = (date) => {
  switch (date.constructor.name) {
    default:
      return date;
    case "String":
      return new Date(date);
    case "Array":
      return new Date(...date);
  }
};
const getDateValue = (args) => args.getDate();
function useCalendar({ date }) {
  const state = ref(parseDate(date));
  const getMonth = () => state.value.getMonth();
  return {
    setYear: (value) => state.value.setFullYear(value),
    setMonth: (value) => state.value.setMonth(value),
    setDate: (value) => state.value.setDate(value),
    date: state.value,
  };
}

export default useCalendar;
