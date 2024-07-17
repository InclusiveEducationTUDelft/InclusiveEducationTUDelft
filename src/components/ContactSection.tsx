import React from 'react';
import styles from '../css/ContactSection.module.css';

const ContactSection: React.FC = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContent}>
                <h2 className={styles.contactTitle}>Want to share something with us?</h2>
                <p className={styles.contactSubtitle}>Reach out to us at</p>
                <div className={styles.contactInputContainer}>
                    <form className={styles.contactForm}>
                        <input type="email" id="email" placeholder="Email Address" className={styles.contactInput} />
                        <button type="submit" className={styles.contactButton}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;