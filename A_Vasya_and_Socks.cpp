#include<bits/stdc++.h>

using namespace std;

int main()
{
    int n,m,d=0,c=0;

    cin>>n>>m;
    d=d+n;
    for(int i=1;i<=n;i++){
        if(i%m==0) c++;
        if(i==n) {
            n+=c;
            d+=c;
            c=0;


        }
    }
    cout<<d;
}
