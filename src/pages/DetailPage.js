import React from 'react';
import ContactDetail from "../components/ContactDetail";
import { getContacts } from "../utils/data";
import { useParams } from 'react-router-dom';

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={Number(id)}/>;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: getContacts(props.id)
    };
  }

  render() {
    if (this.state.contact === null) {
      return <p>Movie is not found!</p>;
    }

    return (
      <section>
        <ContactDetail {...this.state.contact} />
      </section>
    );
  }
}

export default DetailPageWrapper;
