import PropTypes from 'prop-types'

export default function Select ({ options, value, onChange }) {

  return (
    <select value={value} onChange={onChange}>
      { options.map(option =>
        (<option value={option.value} key={option.value}>{option.label}</option>)
      )}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
}