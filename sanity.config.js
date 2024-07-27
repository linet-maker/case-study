/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\sanity\[[...index]]\tool.jsx` route
 */
import { theme } from 'https://themer.sanity.build/api/hues?preset=stereofidelic';
import { DashboardIcon } from '@sanity/icons';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  theme,
  basePath: '/sanity',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  Icon: DashboardIcon,
  title: 'Portfolio CMS',
  plugins: [
    deskTool({
      title: 'Edit',
    }),
    codeInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
