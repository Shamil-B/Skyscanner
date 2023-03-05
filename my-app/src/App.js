import { Component } from "react";
import BpkCalendar from "@skyscanner/backpack-web/bpk-component-calendar";
import BpkInput, {
  INPUT_TYPES,
} from "@skyscanner/backpack-web/bpk-component-input";
import format from "date-fns/format";

import React from "react";
import { BpkCode } from "@skyscanner/backpack-web/bpk-component-code";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";

import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";

import STYLES from "./App.scss";
const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");
const daysOfWeek = [
  {
    name: "Sunday",
    nameAbbr: "Sun",
    nameNarrow: "S",
    index: 0,
    isWeekend: true,
  },
  {
    name: "Monday",
    nameAbbr: "Mon",
    nameNarrow: "M",
    index: 1,
    isWeekend: false,
  },
  {
    name: "Tuesday",
    nameAbbr: "Tue",
    nameNarrow: "T",
    index: 2,
    isWeekend: false,
  },
];

const getClassName = cssModules(STYLES);

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: this.props.selectionConfiguration.type,
        date: date,
      },
    });
  };

  render() {
    return (
      <div className={getClassName("App")}>
        <header className={getClassName("App__header")}>
          <div className={getClassName("App__header-inner")}>
            <BpkText
              tagName="h1"
              textStyle="xxl"
              className={getClassName("App__heading")}
            >
              Flight Schedule
            </BpkText>
          </div>
        </header>
        <main className={getClassName("App__main")}>
          <div>
            <BpkInput
              id="dateInput"
              type={INPUT_TYPES.text}
              name="date"
              value={(this.state.selectionConfiguration.date || "").toString()}
              placeholder="Departure date"
            />
            <BpkCalendar
              id="calendar"
              onDateSelect={this.handleDateSelect}
              formatMonth={formatMonth}
              formatDateFull={formatDateFull}
              daysOfWeek={daysOfWeek}
              weekStartsOn={1}
              changeMonthLabel="Change month"
              nextMonthLabel="Next month"
              previousMonthLabel="Previous month"
              selectionConfiguration={this.state.selectionConfiguration}
            />
          </div>
          <BpkButton onClick={() => alert("It works!")}>Continue</BpkButton>
        </main>
      </div>
    );
  }
}
