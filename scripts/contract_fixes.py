# links all contract documents to their solidity source code in github

# reads and returns the content of a file
def read_file(filename):
    file_r = open(filename, 'r')
    md = file_r.read()
    file_r.close()
    return md

# writes content to a file
def write_file(filename, body):
    file_w = open(filename, 'w')
    _ = file_w.write(body)
    file_w.close()

# modifies the handlebars output to something better
# parameter tables
pattern1 = """
 |"""
replacement1 = """ |
"""
# parameter tables
pattern2 = """|
#"""
replacement2 = """|

#"""
# functions with no args
pattern3 = """(
  )"""
replacement3 = "()"

def modify_body(filename, body):
    # correct tables
    body = body.replace(pattern1, replacement1)
    body = body.replace(pattern2, replacement2)
    body = body.replace(pattern3, replacement3)
    # add github link
    body = f"""<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/{filename[24:-3]}.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>\n\n{body}"""
    return body

# get files
from glob import glob
filenames = sorted(glob('docs/dev-docs/Contracts/**/*', recursive=True))
filenames = list(filter(lambda filename: filename[-3:] == '.md', filenames))
# loop over files
for filename in filenames:
    # read file
    md = read_file(filename)
    # modify file
    md = modify_body(filename, md)
    # write file
    write_file(filename, md)
