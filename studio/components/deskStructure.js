import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {FaHome} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
import {RiGalleryFill} from 'react-icons/ri'
import {FaWindows} from 'react-icons/fa'

export const deskStructure = (S, context) =>
  S.list()
    .title('Capital Studios')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(FaHome)
        .child(S.document().schemaType('home').documentId('772eed3c-9fc5-44de-ac3d-7d7ca264bb48')),
      S.divider(),
      S.listItem()
        .title('Services Page')
        .icon(MdDesignServices)
        .child(
          S.document()
            .schemaType('servicesPage')
            .documentId('306708cc-ffdb-4f9a-be00-af9a0ff210a7'),
        ),
      S.divider(),
      S.listItem()
        .title('Gallery Page')
        .icon(RiGalleryFill)
        .child(
          S.document()
            .schemaType('beforeAndAfterPage')
            .documentId('b5aa20c8-23b3-4f6e-b2af-bfabe685734c'),
        ),

      S.divider(),
      // Optional configuration
      orderableDocumentListDeskItem({
        type: 'services',
        title: 'Services',
        icon: FaWindows,
        S,
        context,
      }),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['media.tag', 'home', 'services', 'servicesPage', 'beforeAndAfterPage'].includes(
            listItem.getId(),
          ),
      ),
    ])
