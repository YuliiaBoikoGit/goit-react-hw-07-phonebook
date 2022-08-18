import { useSelector, useDispatch } from "react-redux"; 
import { List } from "./ContactList.styled";
import { ContactItem } from "components/Contact/Contact";
import { deleteContact } from "redux/contacts";

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const handleDeleteContact = contactID => {
        dispatch(deleteContact(contactID));
    };

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };

    const filteredContacts = getFilteredContacts();
    
    return <List>
                {filteredContacts.map(contact => 
                    <ContactItem key={contact.id} contact={contact} onDeleteContact={handleDeleteContact} />
                )}    
            </List>
};