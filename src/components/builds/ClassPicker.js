import PropTypes from 'prop-types'
import { CLASS_ICON_IMG } from '../../data/class_icons'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ClassPicker.module.scss'
import { capitalizeFirstLetter } from '../../utils'
import PanelBackground from '../ui/PanelBackground'
import { CLASSES } from '../../data/classes'

export default function ClassPicker ({ selectedClass, urlBuilder }) {
  const classList = Object.values(CLASSES)

  return (
    <PanelBackground>
      <div className={styles.classContainer}>
        { classList.map((className) => {
          const linkClasses = [styles.a]
          if (className === selectedClass) {
            linkClasses.push(styles.active)
          }

          return (
            <Link href={urlBuilder(className)} key={className}>
              <a className={linkClasses.join(' ')}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={CLASS_ICON_IMG[className]}
                    alt={`${className} icon`}
                    placeholder={'blur'}
                    priority={true}
                    layout={'fixed'}
                    height={56}
                    width={56}
                    className={styles.image}
                  />
                </div>
                {capitalizeFirstLetter(className)}
              </a>
            </Link>
          )
        })}
      </div>
    </PanelBackground>
  )
}

ClassPicker.propTypes = {
  selectedClass: PropTypes.string,
  urlBuilder: PropTypes.func.isRequired,
}