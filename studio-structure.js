import S from '@sanity/desk-tool/structure-builder';
import { BiUser, BiPhoneCall, BiRocket } from 'react-icons/bi';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About')
        .child(S.editor().id('about').schemaType('about').documentId('about'))
        .icon(BiUser),
      S.listItem()
        .title('Contact')
        .child(
          S.editor().id('contact').schemaType('contact').documentId('contact')
        )
        .icon(BiPhoneCall),
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        )
        .icon(BiRocket),
      // Visual divider
      S.divider(),
      // Rest of the documents
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['about', 'contact', 'settings'].includes(listItem.getId())
      ),
    ]);
