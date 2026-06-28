from setuptools import setup, find_packages

setup(
    name="ucm_custom_app",
    version="0.0.1",
    description="UCM Custom App for Frappe Dashboard",
    author="Ultra Craft",
    author_email="ultracraft2010@gmail.com",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=[]
)
