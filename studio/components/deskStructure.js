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
          S.document()
            .schemaType('servicesPage')
            .documentId('306708cc-ffdb-4f9a-be00-af9a0ff210a7'),
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
        (listItem) => !['media.tag', 'home', 'services', 'servicesPage'].includes(listItem.getId()),
      ),
    ])
