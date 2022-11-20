
import {useRouter} from 'next/router';
import styles from './Categories.module.scss'
const Categories = () => {
    const {push,asPath} = useRouter()
    const items = [
        {
            name: 'House',
            link: '/main'
        },
        {
            name: 'Vehicle',
            link: '/vehicle'
        },
        {
            name: 'Other',
            link: '/other'
        },
    ]
    return (
        <div className={styles.categories}>
            {
                items.map((item)=>{
                    return(
                        <button onClick={()=>push(item.link,undefined,{ shallow: true })} className={asPath === item.link ? styles.active : ''} key={item.name}>
                            <span>{item.name}</span>
                        </button>
                    )
                })
            }
        </div>
    );
}

export default Categories;