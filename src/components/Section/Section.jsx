import css from './Section.module.css'

export const Section = ({ title, type: Type = 'div', children }) =>{   
    return (
        <section className={css.section}>
            <Type className={css.title}>{title}</Type>
            <div>
                {children}
            </div>
        </section>
        );
    
}