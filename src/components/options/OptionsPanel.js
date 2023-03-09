import PropTypes from 'prop-types'
import PanelCard from '../ui/PanelCard'
import Image from 'next/image'

export default function OptionsPanel ({ title, options, value, setValue, description }) {
  const selectedOption = options.find(opt => opt.value === value)

  return (
    <PanelCard id={title}>
      <h5>
        { title } - { value }
      </h5>

      {description}
      { selectedOption && selectedOption.description && (
        <p>{selectedOption.description}</p>
      )}

      { options.map((option) => {
        const buttonClassName = (selectedOption && selectedOption.value === option.value) ? 'active' : ''
        return (
          <button
            className={buttonClassName}
            key={option.value}
            onClick={() => setValue(option.value)}
          >
            {option.value}
          </button>
        )
      })}

      { selectedOption && <br/> }
      { selectedOption && selectedOption.image && (
        <Image alt={selectedOption.description} src={selectedOption.image} placeholder={'blur'} lazyBoundary={'500px'}/>
      )}
    </PanelCard>
  )
}

OptionsPanel.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    image: PropTypes.any,
    description: PropTypes.node,
  })),
  description: PropTypes.node,
}
