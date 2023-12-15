import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const deskStructure = (S, context) =>
  S.list()
    .title('Capital Studios')
    .items([
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('home').documentId('772eed3c-9fc5-44de-ac3d-7d7ca264bb48')),
      S.divider(),
      S.listItem()
        .title('Services Page')
        .child(
          S.document().schemaType('services').documentId('380d46fc-59da-41c9-9f66-1ad7ccd4d42a'),
        ),

      S.divider(),
      // Optional configuration
      orderableDocumentListDeskItem({
        type: 'services',
        title: 'Services',
        S,
        context,
      }),

      ...S.documentTypeListItems().filter(
        (listItem) => !['media.tag', 'home', 'servicesPage', 'services'].includes(listItem.getId()),
      ),
    ])
