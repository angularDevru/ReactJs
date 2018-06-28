import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import loadingImg from '../images/loading.gif'
class UserDetails extends React.Component {
  render() {
    const previewProps = {
      previewImages: [
        {
          name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
          url: 'http://bing.com',
          previewImageSrc: this.props.userData.userDetails.avatar,
          // iconSrc: TestImages.iconPpt,
          imageFit: ImageFit.cover,
          width: 318,
          height: 196
        }
      ]
    };

    return (
      this.props.userData.fetched ? <div style={{ margin: '40px' }}>
        <DocumentCard>
          <DocumentCardPreview {...previewProps} />
          <DocumentCardActivity
            activity="userID:1"
            people={[{ name: `${this.props.userData.userDetails.first_name} ${this.props.userData.userDetails.last_name}`, id: `${this.props.userData.userDetails.id}` }]}
          />
        </DocumentCard>
      </div> : this.props.userData.fetchting ? <div><img src={loadingImg} alt="loading...." style={{ height: '300px' }} /></div> : <div />

    );
  }
}

export default UserDetails;