import openreview
import json
def getData():
    guest_client = openreview.Client(baseurl='https://api.openreview.net')
    notes = openreview.Client.get_notes(guest_client, invitation='ICLR.cc/2019/Conference/-/Blind_Submission')
    data =  {
    'titles': [],
    'abstract':[],
    'authors':[],
    'keywords':[],
    'url':[],
    'pdf':[]
    }
    for note in notes:
    # print(note.forum)
        data['titles'] += [note.content['title']]
        data['abstract'] += [note.content['abstract']]
        data['authors'] += [note.content['authors']]
        data['keywords'] += [note.content['keywords']]
        data['url'] += ['https://openreview.net/forum?id='+note.id]
        data['pdf'] += ['https://openreview.net/pdf?id='+note.id]

    jsonData = json.dumps(data, indent = 4)
    print(jsonData)

getData()

