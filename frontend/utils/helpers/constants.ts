export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;

export const jobColumns =[
    {
        title: 'Job Title',
        dataIndex: 'job_title',
        key: 'jobTitle',
    },
    {
        title: 'Company Name',
        dataIndex: 'company_name',
        key: 'companyName',
    },
    {
        title: 'Job Description',
        dataIndex: 'job_description',
        key: 'jobDescription',
    },
    {
        title: 'Company URL',
        dataIndex: 'company_url',
        key: 'companyUrl',
    },
    {
        title: 'Minimum Compensation',
        dataIndex: 'min_compensation',
        key: 'minCompensation',
    },
    {
        title: 'Maximum Compensation',
        dataIndex: 'max_compensation',
        key: 'maxCompensation',
    },
    {
        title: 'Type of Compensation',
        dataIndex: 'type_compensation',
        key: 'typeCompensation',
    },
    {
        title: 'Job Hours',
        dataIndex: 'job_hours',
        key: 'jobHours',
    },
    {
        title: 'Role Seniority',
        dataIndex: 'role_seniority',
        key: 'roleSeniority',
    },
    {
        title: 'Office Location',
        dataIndex: 'office_location',
        key: 'officeLocation',
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
    },
]