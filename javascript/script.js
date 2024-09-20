
const csvData="ساناز,ماهینی"
const blob = new Blob(["\uFEFF",csvData], { type: 'text/csv' })
const url = window.URL.createObjectURL(blob) 
const a = document.createElement('a')
a.setAttribute('hidden', '')
a.setAttribute('href', url)
a.setAttribute('download', 'download.csv')
document.body.appendChild(a)
a.click()
