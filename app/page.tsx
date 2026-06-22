import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider" 



export default function Page() {
  return (
    <main className="p-6">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>検出設定</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="人数しきい値" />
          <Switch/>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="モデル選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="item1">Model 1</SelectItem>
              <SelectItem value="item2">Model 2</SelectItem>
            </SelectContent>
          </Select>
          <Slider defaultValue={[50]} max={100} step={1} />
          <Button className="bg-blue-500">保存する</Button>
        </CardContent>
      </Card>
    </main>
  )
}