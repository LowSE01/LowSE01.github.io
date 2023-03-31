const skills = [
    {
        "type": "RDBMS/DWH",
        "items": [
            {"level": 5, "name": "MySQL",},
            {"level": 3, "name": "Redshift",},
            {"level": 2, "name": "Oracle",},
            {"level": 2, "name": "SQLServer",},
            {"level": 2, "name": "PostgreSQL",},
        ],
    },
    {
        "type": "Language",
        "items": [
            {"level": 5, "name": "PHP",},
            {"level": 4, "name": "Java",},
            {"level": 3, "name": "Python",},
        ],
    },
    {
        "type": "Jobflow, CI/CD",
        "items": [
            {"level": 5, "name": "Jenkins",},
            {"level": 4, "name": "Apache Airflow",},
            {"level": 4, "name": "Digdag",},
        ],
    },
    {
        "type": "ETL/ELT",
        "items": [
            {"level": 5, "name": "Embulk",},
            {"level": 2, "name": "dbt",},
            {"level": 1, "name": "Airbyte",},
        ],
    },
    {
        "type": "BI Tool",
        "items": [
            {"level": 5, "name": "Tableau",},
            {"level": 4, "name": "Metabase",},
            {"level": 2, "name": "Superset",},
            {"level": 2, "name": "Re:dash",},
            {"level": 2, "name": "PowerBI",},
            {"level": 2, "name": "QuickSight",},
        ],
    },
    {
        "type": "Metadata Management",
        "items": [
            {"level": 3, "name": "Apache Atlas",},
            {"level": 2, "name": "OpenMetadata",},
        ],
    },
    {
        "type": "Cloud",
        "items": [
            {"level": 3, "name": "AWS",},
            {"level": 1, "name": "GCP",},
            {"level": 1, "name": "Azure",},
        ],
    },
    {
        "type": "IaC",
        "items": [
            {"level": 3, "name": "Chef",},
        ],
    },
    {
        "type": "Container",
        "items": [
            {"level": 4, "name": "Docker",},
        ],
    },
]

export default {
    data() {
        return {"skills": skills}
    }
}
