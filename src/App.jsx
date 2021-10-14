import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Section from 'components/Section';
import Filter from 'components/Filter';

export default function App() {
  return (
    <>
      <Section titel="Phonebook">
        <ContactForm />
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
