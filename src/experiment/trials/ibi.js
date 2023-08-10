import { videos } from "./introduction";
import videoKeyboardResponse from '@jspsych/plugin-video-keyboard-response';

const removeImages = () => {
  const rightImg = document.getElementById('rdk-image-right');
  const leftImg = document.getElementById('rdk-image-left');
  if (rightImg !== null) {
    rightImg.parentNode.removeChild(rightImg);
  }
  if (leftImg !== null) {
    leftImg.parentNode.removeChild(leftImg);
  }
};

const loadSpaceBarTapDiv = () => {
  const video = document.getElementById(
    'jspsych-video-keyboard-response-stimulus'
  );

  if (document.getElementById('space-bar-tap') === null) {
    const tapDiv = document.createElement('div');
    tapDiv.id = 'space-bar-tap';
    tapDiv.onclick = () => {
      buttonClicked = true;
      pressKey(' ');
    };
    video.insertAdjacentElement('afterend', tapDiv);
  }
};

// Inter block interval image
export const IBI1 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo1],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

export const IBI2 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo2],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

export const IBI3 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo3],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

export const IBI4 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo4],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

export const IBI5 = {
  type: videoKeyboardResponse,
  stimulus: [videos.levelUpVideo5],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
};

export const IBIEnd = {
  type: videoKeyboardResponse,
  stimulus: [videos.endVideo],
  response_allowed_while_playing: true,
  trial_ends_after_video: true,
  choices: [' '],
  trial_duration: null,
  on_load: () => {
    removeImages();
    loadSpaceBarTapDiv();
  },
  width: 1238,
  height: 800,
  on_finish: async () => {
    await firekit.finishRun();
  },
};