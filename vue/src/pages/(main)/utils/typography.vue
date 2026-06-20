<script setup lang="ts">
import { ref } from 'vue';
import ComponentTitle from '@/components/shared/ComponentTitle.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

// component content
const page = ref({ title: 'Typography' });
const subContent = ref({ content: 'Use typography to present your design and content as clearly and efficiently as possible.' });
const path = ref({ filepath: 'src/views/utilities/typography' });
const link = ref({ filelink: 'https://vuetifyjs.com/en/styles/text-and-typography/' });
</script>

<template>
  <ComponentTitle :title="page.title" :subContent="subContent.content" :path="path.filepath" :link="link.filelink"></ComponentTitle>
  <v-row>
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12">
          <UiParentCard title="Basic">
            <h1 class="mb-1">Inter</h1>
            <h5 class="mb-2">Font Family</h5>
            <v-breadcrumbs
              :items="['Regular', 'Medium', 'Bold']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Heading">
            <h1 class="mb-2">H1 Heading</h1>
            <v-breadcrumbs
              :items="['Size: 38px', 'Weight: Bold', 'Line Height: 46px']"
              class="text-headline-small text-lightText pa-0 flex-wrap mb-3"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h2 class="mb-2 mt-3">H2 Heading</h2>
            <v-breadcrumbs
              :items="['Size: 30px', 'Weight: Bold', 'Line Height: 38px']"
              class="text-headline-small text-lightText pa-0 flex-wrap mb-3"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h3 class="mb-2 mt-3">H3 Heading</h3>
            <v-breadcrumbs
              :items="['Size: 24px', 'Weight: Regular & Bold', 'Line Height: 32px']"
              class="text-headline-small text-lightText pa-0 flex-wrap mb-3"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h4 class="mb-2 mt-3">H4 Heading</h4>
            <v-breadcrumbs
              :items="['Size: 20px', 'Weight: Bold', 'Line Height: 28px']"
              class="text-headline-small text-lightText pa-0 flex-wrap mb-3"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h5 class="mb-2 mt-3">H5 Heading</h5>
            <v-breadcrumbs
              :items="['Size: 16px', 'Weight: Regular & Medium & Bold', 'Line Height: 24px']"
              class="text-headline-small text-lightText pa-0 flex-wrap mb-3"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h6 class="mb-2 mt-3">H6 Heading / Subheading</h6>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Regular', 'Line Height: 22px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Body 1">
            <p class="text-body-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Regular', 'Line Height: 22px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap mt-3"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Body 2">
            <p class="text-label-large">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap mt-3"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Subtitle 1">
            <p class="text-body-large">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Medium', 'Line Height: 22px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap mt-3"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Subtitle 2">
            <p class="text-body-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Medium', 'Line Height: 20px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap mt-3"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Caption">
            <p class="text-label-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap mt-3"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12">
          <UiParentCard title="Alignment">
            <p class="text-left text-label-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="text-center text-label-small mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="text-right mb-0 text-label-small mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Gutter Bottom">
            <h6 class="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <p class="text-label-small mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Overline">
            <div class="text-label-medium text-uppercase mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Link">
            <a href="/utils/typography" class="link-hover text-primary d-inline-block mb-3">#able-pro</a>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Colors">
            <h6 class="text-primary">This is Primary text color.</h6>
            <h6 class="text-secondary">This is Secondary text color.</h6>
            <h6 class="text-success">This is Success text color.</h6>
            <h6 class="text-warning">This is Warning text color.</h6>
            <h6 class="text-error">This is Error text color.</h6>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap mt-3"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Font style">
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="text-body-large font-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Italic Bold', 'Line Height: 22px']"
              class="text-headline-small text-lightText mb-0 pa-0 flex-wrap mt-3"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
