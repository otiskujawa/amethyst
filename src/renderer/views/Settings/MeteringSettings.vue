<script setup lang="ts">
import { amethyst } from "@/amethyst";
// import SettingsBinarySwitch from "@/components/settings/SettingsBinarySwitch.vue";
// import BaseSwitch from "@/components/input/BaseSwitch.vue";
// import SettingsGroup from "@/components/settings/SettingsGroup.vue";
// import SettingsModifier from "@/components/settings/SettingsModifier.vue";
import SettingsSetting from "@/components/settings/SettingsSetting.vue";
import DropdownInput from "@/components/v2/DropdownInput.vue";
import SliderInput from "@/components/v2/SliderInput.vue";
import ToggleSwitch from "@/components/v2/ToggleSwitch.vue";
import { FFT_SIZES } from "@shared/constants";
const {metering} = amethyst.state.settings.value;
</script>

<template>
  <settings-setting
    :title="$t('settings.decibel_meter.title')"
    icon="ic:twotone-speed"
    :description="$t('settings.decibel_meter.description')"
  >
    <toggle-switch v-model="metering.decibelMeter.show" />
    <template
      v-if="metering.decibelMeter.show" 
      #subsettings
    >
      <div class="p-2 flex flex-col gap-2">
        <settings-setting
          subsetting
          :title="$t('settings.decibel_meter.separate_pre_post.title')"
          :description="$t('settings.decibel_meter.separate_pre_post.description')"
          icon="ic:twotone-speed"
        >
          <toggle-switch
            v-model="metering.decibelMeter.separatePrePost"
          />
        </settings-setting>

        <settings-setting
          subsetting
          :title="$t('settings.decibel_meter.minimum_db.title')"
          :description="$t('settings.decibel_meter.minimum_db.description')"
          icon="ic:twotone-speed"
        >
          <slider-input
            v-model="metering.decibelMeter.minimumDb"
            :min="-90"
            :max="-6"
            :step="1"
            suffix="dB"
          />
        </settings-setting>
        <settings-setting
          subsetting
          :title="$t('settings.fft_size.title')"
          :description="$t('settings.fft_size.description')"
          icon="ic:twotone-line-style"
        >
          <dropdown-input
            v-model="metering.decibelMeter.fftSize"
            :options="FFT_SIZES"
            suffix="smp"
          />
        </settings-setting>
        <settings-setting
          subsetting
          :title="$t('settings.decibel_meter.smoothing_duration.title')"
          :description="$t('settings.decibel_meter.smoothing_duration.description')"
          icon="ic:twotone-access-time"
        >
          <slider-input
            v-model="metering.decibelMeter.smoothingDuration"
            :min="0"
            :max="300"
            :step="10"
            suffix="ms"
          />
        </settings-setting>
      </div>
    </template>
  </settings-setting>

  <settings-setting
    :title="$t('settings.loudness_meter.title')"
    icon="ic:twotone-waves"
    :description="$t('settings.loudness_meter.description')"
  >
    <toggle-switch v-model="metering.loudnessMeter.show" />
  </settings-setting>

  <settings-setting
    :title="$t('settings.vectorscope.title')"
    icon="ic:twotone-fiber-smart-record"
    :description="$t('settings.vectorscope.description')"
  >
    <toggle-switch v-model="metering.vectorscope.show" />
    <template
      v-if="metering.vectorscope.show"
      #subsettings 
    >
      <div class="p-2 flex flex-col gap-2">
        <settings-setting
          subsetting
          :title="$t('settings.vectorscope.lissajous.title')"
          :description="$t('settings.vectorscope.lissajous.description')"
          icon="ic:twotone-fitbit"
        >
          <toggle-switch
            v-model="metering.vectorscope.lissajous"
          />
        </settings-setting>
        <settings-setting
          subsetting
          :title="$t('settings.line_thickness.title')"
          :description="$t('settings.line_thickness.description')"
          icon="ic:twotone-drive-file-rename-outline"
        >
          <slider-input
            v-model="metering.vectorscope.lineThickness"
            :min="0.1"
            :max="10"
            :step="1"
            suffix="px"
          />
        </settings-setting>
        <settings-setting
          subsetting
          :title="$t('settings.fft_size.title')"
          :description="$t('settings.fft_size.description')"
          icon="ic:twotone-line-style"
        >
          <dropdown-input
            v-model="metering.vectorscope.fftSize"
            :options="FFT_SIZES"
            suffix="smp"
          />
        </settings-setting>
      </div>
    </template>
  </settings-setting>

  <settings-setting
    :title="$t('settings.spectrum_analyzer.title')"
    icon="ic:twotone-graphic-eq"
    :description="$t('settings.spectrum_analyzer.description')"
  >
    <toggle-switch v-model="metering.spectrum.show" />
    <template
      v-if="metering.spectrum.show" 
      #subsettings
    >
      <div class="p-2 flex flex-col gap-2">
        <settings-setting
          subsetting
          :title="$t('settings.smoothing_duration.title')"
          :description="$t('settings.smoothing_duration.description')"
          icon="ic:twotone-access-time"
        >
          <slider-input
            v-model="metering.spectrum.smoothing"
            :min="0"
            :max="1"
            :step="0.01"
            suffix="ms"
          />
        </settings-setting>
        <settings-setting
          subsetting
          :title="$t('settings.fft_size.title')"
          :description="$t('settings.fft_size.description')"
          icon="ic:twotone-line-style"
        >
          <dropdown-input
            v-model="metering.spectrum.fftSize"
            :options="FFT_SIZES"
            suffix="smp"
          />
        </settings-setting>
        <settings-setting
          :title="$t('settings.spectrogram_analyzer.title')"
          icon="ic:baseline-water"
          subsetting
          :description="$t('settings.spectrogram_analyzer.description')"
        >
          <toggle-switch v-model="metering.spectrogram.show" />
          <template
            v-if="metering.spectrogram.show" 
            #subsettings
          >
            <div class="p-2 flex flex-col gap-2">
              <settings-setting
                subsetting
                :title="$t('settings.smoothing_duration.title')"
                :description="$t('settings.smoothing_duration.description')"
                icon="ic:twotone-access-time"
              >
                <slider-input
                  v-model="metering.spectrogram.smoothing"
                  :min="0"
                  :max="1"
                  :step="0.01"
                  suffix="ms"
                />
              </settings-setting>
              <settings-setting
                subsetting
                :title="$t('settings.fft_size.title')"
                :description="$t('settings.fft_size.description')"
                icon="ic:twotone-line-style"
              >
                <dropdown-input
                  v-model="metering.spectrogram.fftSize"
                  :options="FFT_SIZES"
                  suffix="smp"
                />
              </settings-setting>
            </div>
          </template>
        </settings-setting>
      </div>
    </template>
  </settings-setting>

  <settings-setting
    :title="$t('settings.oscilloscope_analyzer.title')"
    icon="mdi:sawtooth-wave"
    :description="$t('settings.oscilloscope_analyzer.description')"
  >
    <toggle-switch v-model="metering.oscilloscope.show" />
    <template
      v-if="metering.oscilloscope.show"
      #subsettings
    >
      <div class="p-2 flex flex-col gap-2">
        <settings-setting
          subsetting
          :title="$t('settings.smoothing_duration.title')"
          :description="$t('settings.smoothing_duration.description')"
          icon="ic:twotone-access-time"
        >
          <slider-input
            v-model="metering.oscilloscope.smoothing"
            :min="0"
            :max="1"
            :step="0.01"
            suffix="ms"
          />
        </settings-setting>
        <settings-setting
          subsetting
          :title="$t('settings.line_thickness.title')"
          :description="$t('settings.line_thickness.description')"
          icon="ic:twotone-drive-file-rename-outline"
        >
          <slider-input
            v-model="metering.oscilloscope.lineThickness"
            :min="0.1"
            :max="10"
            :step="1"
            suffix="px"
          />
        </settings-setting>
        <settings-setting
          subsetting
          :title="$t('settings.fft_size.title')"
          :description="$t('settings.fft_size.description')"
          icon="ic:twotone-line-style"
        >
          <dropdown-input
            v-model="metering.oscilloscope.fftSize"
            :options="FFT_SIZES"
            suffix="smp"
          />
        </settings-setting>
      </div>
    </template>
  </settings-setting>
</template>