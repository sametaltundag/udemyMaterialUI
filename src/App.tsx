import React from 'react';
import './App.css';
import { LessonTypography } from './components/LessonTypography';
import { LessonButton } from './components/LessonButton';
import { LessonButtonGroup } from './components/LessonButtonGroup';
import { LessonTextField } from './components/LessonTextField';
import { LessonRadioGroup } from './components/LessonRadioGroup';
import { LessonSelect } from './components/LessonSelect';
import { LessonCheckbox } from './components/LessonCheckbox';
import { LessonAutoComplete } from './components/LessonAutoComplete';
import { LessonCard } from './components/LessonCard';
import { LessonAccardion } from './components/LessonAccardion';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography /> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup /> */}
      {/* <LessonTextField /> */}
      {/* <LessonRadioGroup /> */}
      {/* <LessonSelect /> */}
      {/* <LessonCheckbox /> */}
      {/* <LessonAutoComplete /> */}
      {/* <LessonCard /> */}
      <LessonAccardion />
    </div>
  );
}

export default App;
