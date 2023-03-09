import React, { useState } from 'react'
import { browserDownloadJson } from '../src/utils'
import MyHead from '../src/components/MyHead'
import defaultSettings from '../src/data/options.json'
import PanelBackground from '../src/components/ui/PanelBackground'
import PanelCard from '../src/components/ui/PanelCard'
import OptionsPanel from '../src/components/options/OptionsPanel'
import Image from 'next/image'
import styles from '../styles/Options.module.scss'
import ExplorerLocationImg from '../public/options_examples/explorer_location.jpg'

import PartyTabTrueImg from '../public/options_examples/party_tabs_true.jpg'
import PartyTabFalseImg from '../public/options_examples/party_tabs_false.jpg'

import EmbeddedFalseImg from '../public/options_examples/embedded_nameplate_false.jpg'
import EmbeddedTrueImg from '../public/options_examples/embedded_nameplate_true.jpg'

import NameplateBlankImg from '../public/options_examples/nameplate_blank.jpg'
import NameplateClassImg from '../public/options_examples/nameplate_class.jpg'
import NameplateKeybindImg from '../public/options_examples/nameplate_keybind.jpg'
import NameplateNameImg from '../public/options_examples/nameplate_names.jpg'
import NameplateNumberImg from '../public/options_examples/nameplate_numbers.jpg'

import TargetArrowAllyFalseImg from '../public/options_examples/target_arrow_ally_false.jpg'
import TargetArrowAllyTrueImg from '../public/options_examples/target_arrow_ally_true.jpg'

import TargetArrowEnemyFalseImg from '../public/options_examples/target_arrow_enemy_false.jpg'
import TargetArrowEnemyTrueImg from '../public/options_examples/target_arrow_enemy_true.jpg'

import TargetGlowAllyFalseImg from '../public/options_examples/target_glow_ally_false.jpg'
import TargetGlowAllyTrueImg from '../public/options_examples/target_glow_ally_true.jpg'

import TargetGlowEnemyFalseImg from '../public/options_examples/target_glow_enemy_false.jpg'
import TargetGlowEnemyTrueImg from '../public/options_examples/target_glow_enemy_true.jpg'

import UIBackdropFalseImg from '../public/options_examples/ui_backdrop_false.jpg'
import UIBackdropTrueImg from '../public/options_examples/ui_backdrop_true.jpg'

import UILongbarFalseImg from '../public/options_examples/ui_longbar_false.jpg'
import UILongbarTrueImg from '../public/options_examples/ui_longbar_true.jpg'

import DefaultFramesImg from '../public/options_examples/frame_positions_default.jpeg'
import DanaeFramesImg from '../public/options_examples/frame_positions_denae.jpg'
import Mr2FramesImg from '../public/options_examples/frame_positions_mr2.jpeg'
import Mr2MirrorFramesImg from '../public/options_examples/frame_positions_mr2_mirror.jpeg'
import SodapoppinFramesImg from '../public/options_examples/frame_positions_sodapoppin.jpeg'
import AllukaFramesImg from '../public/options_examples/frame_positions_alluka.jpeg'
import AllukaLoweredFramesImg from '../public/options_examples/frame_positions_alluka_lowered.jpeg'

import HideChannelFrameFalseImg from '../public/options_examples/hide_channel_frame_false.jpg'
import HideChannelFrameTrueImg from '../public/options_examples/hide_channel_frame_true.jpg'

export default function Home () {

  const [options, setOptions] = useState(defaultSettings)
  const [nameplateStyle, setNameplateStyleState] = useState('CHARACTER_NAME')
  const [framePositionsStyle, setFramePositionStyle] = useState('default')
  const optionsJsonString = JSON.stringify(options, null, 4)

  const setNameplateStyle = (style) => {
    const updateFields = {
      NAMEPLATE_USE_CHARACTER_NAME : "false",
      NAMEPLATE_USE_CLASS_NAME : "false",
      NAMEPLATE_USE_KEYBIND : "false",
      NAMEPLATE_USE_NUMBER : "false",
    }

    switch (style) {
      case 'CHARACTER_NAME':
        updateFields.NAMEPLATE_USE_CHARACTER_NAME = 'true'
        break
      case 'CLASS_NAME':
        updateFields.NAMEPLATE_USE_CLASS_NAME = 'true'
        break
      case 'KEYBIND':
        updateFields.NAMEPLATE_USE_KEYBIND = 'true'
        break
      case 'NUMBER':
        updateFields.NAMEPLATE_USE_NUMBER = 'true'
        break
    }

    setFields(updateFields)
    setNameplateStyleState(style)
  }

  const setNameplatePositions = (style) => {
    let frameSettings = { // also the 'default' option
      ALLY_1_PARTY_FRAME_X_OFFSET : "0",
      ALLY_1_PARTY_FRAME_Y_OFFSET : "0",
      ALLY_2_PARTY_FRAME_X_OFFSET : "225",
      ALLY_2_PARTY_FRAME_Y_OFFSET : "0",
      ALLY_3_PARTY_FRAME_X_OFFSET : "450",
      ALLY_3_PARTY_FRAME_Y_OFFSET : "0",
      ENEMY_1_PARTY_FRAME_X_OFFSET : "1190",
      ENEMY_1_PARTY_FRAME_Y_OFFSET : "0",
      ENEMY_2_PARTY_FRAME_X_OFFSET : "1415",
      ENEMY_2_PARTY_FRAME_Y_OFFSET : "0",
      ENEMY_3_PARTY_FRAME_X_OFFSET : "1640",
      ENEMY_3_PARTY_FRAME_Y_OFFSET : "0",
    }

    switch (style) {
      case 'denae':
        frameSettings = {
          ALLY_1_PARTY_FRAME_X_OFFSET : "100",
          ALLY_1_PARTY_FRAME_Y_OFFSET : "555",
          ALLY_2_PARTY_FRAME_X_OFFSET : "100",
          ALLY_2_PARTY_FRAME_Y_OFFSET : "455",
          ALLY_3_PARTY_FRAME_X_OFFSET : "100",
          ALLY_3_PARTY_FRAME_Y_OFFSET : "355",
          ENEMY_1_PARTY_FRAME_X_OFFSET : "1543",
          ENEMY_1_PARTY_FRAME_Y_OFFSET : "555",
          ENEMY_2_PARTY_FRAME_X_OFFSET : "1543",
          ENEMY_2_PARTY_FRAME_Y_OFFSET : "455",
          ENEMY_3_PARTY_FRAME_X_OFFSET : "1543",
          ENEMY_3_PARTY_FRAME_Y_OFFSET : "355",
        }
        break

      case 'mr2':
        frameSettings = {
          ALLY_1_PARTY_FRAME_X_OFFSET : "475",
          ALLY_1_PARTY_FRAME_Y_OFFSET : "285",
          ALLY_2_PARTY_FRAME_X_OFFSET : "475",
          ALLY_2_PARTY_FRAME_Y_OFFSET : "180",
          ALLY_3_PARTY_FRAME_X_OFFSET : "475",
          ALLY_3_PARTY_FRAME_Y_OFFSET : "75",
          ENEMY_1_PARTY_FRAME_X_OFFSET : "1190",
          ENEMY_1_PARTY_FRAME_Y_OFFSET : "0",
          ENEMY_2_PARTY_FRAME_X_OFFSET : "1415",
          ENEMY_2_PARTY_FRAME_Y_OFFSET : "0",
          ENEMY_3_PARTY_FRAME_X_OFFSET : "1640",
          ENEMY_3_PARTY_FRAME_Y_OFFSET : "0",
        }
        break

      case 'mr2-mirrored':
        frameSettings = {
          ALLY_1_PARTY_FRAME_X_OFFSET : "475",
          ALLY_1_PARTY_FRAME_Y_OFFSET : "285",
          ALLY_2_PARTY_FRAME_X_OFFSET : "475",
          ALLY_2_PARTY_FRAME_Y_OFFSET : "180",
          ALLY_3_PARTY_FRAME_X_OFFSET : "475",
          ALLY_3_PARTY_FRAME_Y_OFFSET : "75",
          ENEMY_1_PARTY_FRAME_X_OFFSET : "1190",
          ENEMY_1_PARTY_FRAME_Y_OFFSET : "285",
          ENEMY_2_PARTY_FRAME_X_OFFSET : "1190",
          ENEMY_2_PARTY_FRAME_Y_OFFSET : "180",
          ENEMY_3_PARTY_FRAME_X_OFFSET : "1190",
          ENEMY_3_PARTY_FRAME_Y_OFFSET : "75",
        }
        break

      case 'sodapoppin':
        frameSettings = {
          ALLY_1_PARTY_FRAME_X_OFFSET : "0",
          ALLY_1_PARTY_FRAME_Y_OFFSET : "650",
          ALLY_2_PARTY_FRAME_X_OFFSET : "0",
          ALLY_2_PARTY_FRAME_Y_OFFSET : "525",
          ALLY_3_PARTY_FRAME_X_OFFSET : "0",
          ALLY_3_PARTY_FRAME_Y_OFFSET : "400",
          ENEMY_1_PARTY_FRAME_X_OFFSET : "1640",
          ENEMY_1_PARTY_FRAME_Y_OFFSET : "650",
          ENEMY_2_PARTY_FRAME_X_OFFSET : "1640",
          ENEMY_2_PARTY_FRAME_Y_OFFSET : "525",
          ENEMY_3_PARTY_FRAME_X_OFFSET : "1640",
          ENEMY_3_PARTY_FRAME_Y_OFFSET : "400",
        }
        break

      case 'alluka':
        frameSettings = {
          ALLY_1_PARTY_FRAME_X_OFFSET : "680",
          ALLY_1_PARTY_FRAME_Y_OFFSET : "320",
          ALLY_2_PARTY_FRAME_X_OFFSET : "680",
          ALLY_2_PARTY_FRAME_Y_OFFSET : "255",
          ALLY_3_PARTY_FRAME_X_OFFSET : "680",
          ALLY_3_PARTY_FRAME_Y_OFFSET : "190",
          ENEMY_1_PARTY_FRAME_X_OFFSET : "950",
          ENEMY_1_PARTY_FRAME_Y_OFFSET : "320",
          ENEMY_2_PARTY_FRAME_X_OFFSET : "950",
          ENEMY_2_PARTY_FRAME_Y_OFFSET : "255",
          ENEMY_3_PARTY_FRAME_X_OFFSET : "950",
          ENEMY_3_PARTY_FRAME_Y_OFFSET : "190",
        }
        break

      case 'alluka-lowered':
        frameSettings = {
          ALLY_1_PARTY_FRAME_X_OFFSET : "680",
          ALLY_1_PARTY_FRAME_Y_OFFSET : "250",
          ALLY_2_PARTY_FRAME_X_OFFSET : "680",
          ALLY_2_PARTY_FRAME_Y_OFFSET : "185",
          ALLY_3_PARTY_FRAME_X_OFFSET : "680",
          ALLY_3_PARTY_FRAME_Y_OFFSET : "120",
          ENEMY_1_PARTY_FRAME_X_OFFSET : "960",
          ENEMY_1_PARTY_FRAME_Y_OFFSET : "250",
          ENEMY_2_PARTY_FRAME_X_OFFSET : "960",
          ENEMY_2_PARTY_FRAME_Y_OFFSET : "185",
          ENEMY_3_PARTY_FRAME_X_OFFSET : "960",
          ENEMY_3_PARTY_FRAME_Y_OFFSET : "120",
        }
    }

    setFields(frameSettings)
    setFramePositionStyle(style)
  }

  const setFields = (newFields) => {
    const newOptions = {...options, ...newFields}
    setOptions(newOptions)
  }

  const setField = (field, value) => {
    const newOptions = {...options}
    newOptions[field] = value

    setOptions(newOptions)
  }

  return (
    <div>
      <MyHead
        title={'Options.json'}
        description={'Arena of Kings options.json helper'}
      />

      <p className={styles.mobileWarning}>
        This page is not mobile friendly, sorry
      </p>

      <PanelBackground className={styles.container}>
        <PanelCard>
          <h1>Options.json</h1>
          <p>At the bottom of the page you can view and download a copy of the <code>options.json</code> file with the settings you select</p>
          <p>pick your UI settings, then use it to edit the <code>options.json</code> file in the Arena of Kings folder install folder.</p>
          <Image src={ExplorerLocationImg} alt={'file location: \'\\Steam\\steamapps\\common\\Arena of Kings\''}/>
        </PanelCard>

        <OptionsPanel
          title={'VIDEO_FPS_FOREGROUND'}
          description={<p>Max FPS while playing</p>}
          value={options.VIDEO_FPS_FOREGROUND}
          setValue={setField.bind(this, 'VIDEO_FPS_FOREGROUND')}
          options={[
            { value: "REFRESH_RATE" },
            { value: "30" },
            { value: "60" },
            { value: "75" },
            { value: "144" },
            { value: "240" },
          ]}
        />

        <OptionsPanel
          title={'VIDEO_FPS_BACKGROUND'}
          description={<p>Max FPS while tabbed out</p>}
          value={options.VIDEO_FPS_BACKGROUND}
          setValue={setField.bind(this, 'VIDEO_FPS_BACKGROUND')}
          options={[
            { value: "REFRESH_RATE" },
            { value: "30" },
            { value: "60" },
            { value: "75" },
            { value: "144" },
            { value: "240" },
          ]}
        />

        <OptionsPanel
          title={'VIDEO_VSYNC'}
          value={options.VIDEO_VSYNC}
          description={<p>Enable vsync</p>}
          setValue={setField.bind(this, 'VIDEO_VSYNC')}
          options={[
            { value: "true" },
            { value: "false" },
          ]}
        />

        <OptionsPanel
          title={'VIDEO_FULLSCREEN_MODE'}
          value={options.VIDEO_FULLSCREEN_MODE}
          setValue={setField.bind(this, 'VIDEO_FULLSCREEN_MODE')}
          options={[
            {
              value: "true",
              description: "True fullscreen mode",
            },
            {
              value: "false",
              description: "Borderless fullscreen mode",
            },
          ]}
        />

        <OptionsPanel
          title={'VOLUME_LEVEL'}
          description={<p>Volume %</p>}
          value={options.VOLUME_LEVEL}
          setValue={setField.bind(this, 'VOLUME_LEVEL')}
          options={[
            { value: "100" },
            { value: "75" },
            { value: "50" },
            { value: "25" },
            { value: "0" },
          ]}
        />

        <OptionsPanel
          title={'STICKY_TARGETING'}
          value={options.STICKY_TARGETING}
          setValue={setField.bind(this, 'STICKY_TARGETING')}
          options={[
            {
              value: "true",
              description: "Left clicking on the ground will not deselect my current target",
            },
            {
              value: "false",
              description: "Left clicking on the ground will deselect my current target",
            },
          ]}
        />

        <OptionsPanel
          title={'PARTY_TABS'}
          value={options.PARTY_TABS}
          setValue={setField.bind(this, 'PARTY_TABS')}
          options={[
            {
              value: "true",
              image: PartyTabTrueImg,
            },
            {
              value: "false",
              image: PartyTabFalseImg,
            },
          ]}
        />

        <OptionsPanel
          title={'CLICK_ALLY_HOLD_SHIFT'}
          value={options.CLICK_ALLY_HOLD_SHIFT}
          setValue={setField.bind(this, 'CLICK_ALLY_HOLD_SHIFT')}
          options={[
            {
              value: "true",
              description: "Holding shift will cause my left clicks to only target allies",
            },
            {
              value: "false",
              description: "Holding shift will not change how my click targeting works",
            },
          ]}
        />

        <OptionsPanel
          title={'CLICK_ENEMY_HOLD_CONTROL'}
          value={options.CLICK_ENEMY_HOLD_CONTROL}
          setValue={setField.bind(this, 'CLICK_ENEMY_HOLD_CONTROL')}
          options={[
            {
              value: "true",
              description: "Holding control will cause my left clicks to only target enemies",
            },
            {
              value: "false",
              description: "Holding control will not change how my click targeting works",
            },
          ]}
        />

        <OptionsPanel
          title={'NAMEPLATE_EMBEDDED_KEYBINDS'}
          value={options.NAMEPLATE_EMBEDDED_KEYBINDS}
          setValue={setField.bind(this, 'NAMEPLATE_EMBEDDED_KEYBINDS')}
          options={[
            {
              value: "true",
              image: EmbeddedTrueImg,
            },
            {
              value: "false",
              image: EmbeddedFalseImg,
            },
          ]}
        />

        <OptionsPanel
          title={'NAMEPLATE_USE_'}
          value={nameplateStyle}
          setValue={setNameplateStyle}
          options={[
            {
              value: "blank",
              image: NameplateBlankImg,
            },
            {
              value: "CHARACTER_NAME",
              image: NameplateNameImg,
            },
            {
              value: "CLASS_NAME",
              image: NameplateClassImg,
            },
            {
              value: "KEYBIND",
              image: NameplateKeybindImg,
            },
            {
              value: "NUMBER",
              image: NameplateNumberImg,
            },
          ]}
        />

        <OptionsPanel
          title={'NAMEPLATE_TARGET_INDICATOR_ALLY'}
          value={options.NAMEPLATE_TARGET_INDICATOR_ALLY}
          setValue={setField.bind(this, 'NAMEPLATE_TARGET_INDICATOR_ALLY')}
          options={[
            {
              value: "true",
              image: TargetArrowAllyTrueImg,
            },
            {
              value: "false",
              image: TargetArrowAllyFalseImg,
            },
          ]}
        />

        <OptionsPanel
          title={'NAMEPLATE_TARGET_INDICATOR_ENEMY'}
          value={options.NAMEPLATE_TARGET_INDICATOR_ENEMY}
          setValue={setField.bind(this, 'NAMEPLATE_TARGET_INDICATOR_ENEMY')}
          options={[
            {
              value: "true",
              image: TargetArrowEnemyTrueImg,
            },
            {
              value: "false",
              image: TargetArrowEnemyFalseImg,
            },
          ]}
        />

        <OptionsPanel
          title={'ALLY_TARGET_FEET_GLOW'}
          value={options.ALLY_TARGET_FEET_GLOW}
          setValue={setField.bind(this, 'ALLY_TARGET_FEET_GLOW')}
          options={[
            {
              value: "true",
              image: TargetGlowAllyTrueImg,
            },
            {
              value: "false",
              image: TargetGlowAllyFalseImg,
            },
          ]}
        />

        <OptionsPanel
          title={'ENEMY_TARGET_FEET_GLOW'}
          value={options.ENEMY_TARGET_FEET_GLOW}
          setValue={setField.bind(this, 'ENEMY_TARGET_FEET_GLOW')}
          options={[
            {
              value: "true",
              image: TargetGlowEnemyTrueImg,
            },
            {
              value: "false",
              image: TargetGlowEnemyFalseImg,
            },
          ]}
        />

        <OptionsPanel
          title={'SHOW_PLAY_UI_BACKDROP'}
          value={options.SHOW_PLAY_UI_BACKDROP}
          setValue={setField.bind(this, 'SHOW_PLAY_UI_BACKDROP')}
          options={[
            {
              value: "true",
              image: UIBackdropTrueImg,
            },
            {
              value: "false",
              image: UIBackdropFalseImg,
            },
          ]}
        />

        <OptionsPanel
          title={'SHOW_PLAY_UI_LONGBAR'}
          value={options.SHOW_PLAY_UI_LONGBAR}
          setValue={setField.bind(this, 'SHOW_PLAY_UI_LONGBAR')}
          options={[
            {
              value: "true",
              image: UILongbarTrueImg,
            },
            {
              value: "false",
              image: UILongbarFalseImg,
            },
          ]}
        />

        <OptionsPanel
          title={'FRAME_POSITIONS'}
          value={framePositionsStyle}
          description={
            <>
              <p>Ally and Enemy frame positions, Some preset positions can be selected from below.</p>
              <p>
                You can also manually edit the ALLY/ENEMY_#_PARTY_X/Y_OFFSET values to move frame positions to your liking.<br/>
                If you have a good frame position setup that you would like to see here, share in in the <a href='https://discord.com/invite/aok' target='_blank' rel='noreferrer'>aok discord</a>
              </p>
            </>
          }
          setValue={setNameplatePositions}
          options={[
            {
              value: 'default',
              image: DefaultFramesImg,
            },
            {
              value: 'sodapoppin',
              image: SodapoppinFramesImg,
              description: (
                <div>
                  <p>This setting only moves unit frames.</p>
                  <p>The screenshot also has these two settings set to false: <a href='#SHOW_PLAY_UI_LONGBAR'>SHOW_PLAY_UI_LONGBAR</a> and <a href='#SHOW_PLAY_UI_BACKDROP'>SHOW_PLAY_UI_BACKDROP</a></p>
                </div>
              ),
            },
            {
              value: 'denae',
              image: DanaeFramesImg,
            },
            {
              value: 'mr2',
              image: Mr2FramesImg,
            },
            {
              value: 'mr2-mirrored',
              image: Mr2MirrorFramesImg,
            },
            {
              value: 'alluka',
              image: AllukaFramesImg,
            },
            {
              value: 'alluka-lowered',
              image: AllukaLoweredFramesImg,
              description: (
                <p>This will overlap with party tabs</p>
              ),
            },
          ]}
        />

        <OptionsPanel
          title={'PLAY_HIDE_CHANNEL_FRAME'}
          value={options.PLAY_HIDE_CHANNEL_FRAME}
          setValue={setField.bind(this, 'PLAY_HIDE_CHANNEL_FRAME')}
          options={[
            {
              value: "true",
              image: HideChannelFrameTrueImg,
            },
            {
              value: "false",
              image: HideChannelFrameFalseImg,
            },
          ]}
        />

        <PanelCard id={'json'}>
          <pre>
            {optionsJsonString}
          </pre>
        </PanelCard>

        <PanelCard>
          <button onClick={() => browserDownloadJson(optionsJsonString)}>Download options.json</button>
        </PanelCard>

      </PanelBackground>
    </div>
  )
}