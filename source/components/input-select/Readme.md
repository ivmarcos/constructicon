# Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
initialState = { gender: '' };

<div>
  <InputSelect
    label='Gender'
    name='gender'
    placeholder='Please Select Gender'
    value={state.gender}
    onChange={(v) => setState({ gender: v })}
    options={[
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ]}
  />
</div>
```

**Grouped Options**

Includes support for `<optgroup>`

```
initialState = { event: '' };

<div>
  <InputSelect
    label='Event'
    name='event'
    placeholder='Please Select Event'
    value={state.event}
    onChange={(v) => setState({ event: v })}
    groupOptions
    options={[
      { value: 'all', label: 'All Events' },
      { value: 'event1', label: 'Great Event', group: 'Active' },
      { value: 'event2', label: 'Another Event', group: 'Active' },
      { value: 'event3', label: 'Previous Event', group: 'Inactive' }
    ]}
  />
</div>
```
