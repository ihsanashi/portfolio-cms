// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import project from './documents/project';
import link from './objects/link';
import settings from './documents/settings';
import about from './singleton/about';
import contact from './singleton/contact';
import home from './singleton/home';
import asset from './objects/asset';
import dossier from './objects/dossier';
import workExperience from './objects/workExperience';
import skill from './objects/skill';
import post from './documents/post';
import category from './documents/category';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    project,
    post,
    link,
    home,
    about,
    contact,
    settings,
    asset,
    dossier,
    workExperience,
    skill,
    category,
  ]),
});
